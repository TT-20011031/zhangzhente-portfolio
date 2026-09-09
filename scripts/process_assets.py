"""Build public, web-sized portfolio assets from the private source folder.

The source screenshots never enter the site repository. Crops and opaque masks are
applied before export so sensitive information is not recoverable in the browser.
"""

from __future__ import annotations

import argparse
import shutil
from pathlib import Path

from PIL import Image, ImageDraw, ImageOps


PUBLIC = Path(__file__).resolve().parents[1] / "public"


def export_webp(
    source: Path,
    target: Path,
    *,
    crop: tuple[int, int, int, int] | None = None,
    masks: tuple[tuple[int, int, int, int, str], ...] = (),
    max_width: int = 2200,
    max_height: int = 2400,
) -> None:
    image = ImageOps.exif_transpose(Image.open(source)).convert("RGB")
    if masks:
        draw = ImageDraw.Draw(image)
        for left, top, right, bottom, fill in masks:
            draw.rounded_rectangle((left, top, right, bottom), radius=8, fill=fill)
    if crop:
        image = image.crop(crop)
    image.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)
    target.parent.mkdir(parents=True, exist_ok=True)
    image.save(target, "WEBP", quality=88, method=6, exact=True)


def copy_asset(source: Path, target: Path) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(source, target)


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate sanitized public portfolio assets")
    parser.add_argument(
        "--source",
        type=Path,
        default=Path(__file__).resolve().parents[2] / "个人作品集素材",
        help="Path to the private source-material folder",
    )
    source = parser.parse_args().source.resolve()

    delu = source / "1_DeluData"
    drug = source / "2_中药研发助手"
    policy = source / "3_政策公平竞争审查工具"
    research = source / "4_科研成果"

    # DeluData: remove the private workspace sidebar, database host and account.
    export_webp(
        delu / "截图" / "问数语义治理控制台.png",
        PUBLIC / "media" / "deludata" / "semantic-console.webp",
        crop=(335, 92, 1905, 458),
    )
    export_webp(
        delu / "截图" / "问答效果.png",
        PUBLIC / "media" / "deludata" / "query-result-redacted.webp",
        crop=(340, 78, 1775, 900),
        masks=(
            (1260, 104, 1742, 172, "#111111"),
            (570, 467, 1735, 692, "#dedbd4"),
        ),
    )

    delu_diagrams = {
        "系统架构总览图.svg": "system-overview.svg",
        "Wiki-First 知识流水线.svg": "wiki-first-pipeline.svg",
        "智能问数时序图.svg": "text-to-sql-sequence.svg",
        "多租户与权限治理图.svg": "permission-governance.svg",
    }
    for source_name, target_name in delu_diagrams.items():
        copy_asset(
            delu / "系统架构图" / source_name,
            PUBLIC / "media" / "deludata" / target_name,
        )

    # Drug assistant: keep the product surface and workflow while excluding
    # conversation history, detailed prompts, formula amounts and pricing.
    export_webp(
        drug / "截图" / "对话页面.png",
        PUBLIC / "media" / "drug" / "workspace.webp",
        crop=(700, 250, 1910, 665),
    )
    export_webp(
        drug / "截图" / "多轮对话页.png",
        PUBLIC / "media" / "drug" / "workflow-progress.webp",
        crop=(770, 335, 1820, 1135),
        masks=((1480, 595, 1930, 690, "#f4eee2"),),
    )
    export_webp(
        drug / "截图" / "研发报告生成页.png",
        PUBLIC / "media" / "drug" / "report-stages.webp",
        crop=(330, 82, 725, 875),
    )
    copy_asset(
        drug / "系统架构图" / "drug-development-system-overview.svg",
        PUBLIC / "media" / "drug" / "system-overview.svg",
    )

    export_webp(
        policy / "截图" / "封面图.png",
        PUBLIC / "media" / "policy" / "workspace.webp",
    )
    export_webp(
        policy / "截图" / "分析结果.png",
        PUBLIC / "media" / "policy" / "analysis-result.webp",
    )

    for folder, target_folder in (("DynG-Diff", "dyng"), ("中文核心论文", "csp")):
        for name, target in (
            ("核心架构图.png", "architecture.webp"),
            ("核心结果表.png", "results.webp"),
            ("关键实验图1.png", "experiment-1.webp"),
            ("关键实验图2.png", "experiment-2.webp"),
            ("关键实验图3.png", "experiment-3.webp"),
        ):
            export_webp(
                research / folder / name,
                PUBLIC / "media" / target_folder / target,
                max_width=2400,
                max_height=2200,
            )

    copy_asset(
        source / "0_个人信息" / "简历.pdf",
        PUBLIC / "resume.pdf",
    )


if __name__ == "__main__":
    main()
