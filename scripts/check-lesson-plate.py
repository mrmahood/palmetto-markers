"""Reject a lesson illustration that leaves the dollar-bill plate.

Keep the floors in sync with src/data/lessons/plate.ts.
Green must lead (2*g - r - b), blue must not win, saturation stays low.
"""

from __future__ import annotations

import sys
import warnings
from pathlib import Path

from PIL import Image

warnings.filterwarnings("ignore", category=DeprecationWarning)

ROOT = Path(__file__).resolve().parents[1] / "public" / "images" / "lessons"
MIN_FILES = 400
MIN_GREEN_LEAD = 10.0
MAX_SATURATION = 48.0


def sample(path: Path) -> tuple[float, float, float]:
    image = Image.open(path).convert("RGB")
    image.thumbnail((40, 28))
    pixels = list(image.getdata())
    count = len(pixels)
    red = sum(pixel[0] for pixel in pixels) / count
    green = sum(pixel[1] for pixel in pixels) / count
    blue = sum(pixel[2] for pixel in pixels) / count
    return red, green, blue


def main() -> int:
    files = sorted(ROOT.glob("*.jpg"))
    if len(files) < MIN_FILES:
        print(f"expected at least {MIN_FILES} lesson pictures, found {len(files)}", file=sys.stderr)
        return 1
    offenders: list[str] = []
    for path in files:
        red, green, blue = sample(path)
        lead = (2 * green) - red - blue
        saturation = max(red, green, blue) - min(red, green, blue)
        if lead < MIN_GREEN_LEAD or green + 2 < blue or saturation > MAX_SATURATION:
            offenders.append(
                f"{path.name} rgb=({red:.0f},{green:.0f},{blue:.0f}) "
                f"lead={lead:.1f} sat={saturation:.1f}"
            )
    if offenders:
        print("lesson pictures left the dollar-bill plate:", file=sys.stderr)
        for line in offenders:
            print(f"  {line}", file=sys.stderr)
        return 1
    print(f"ok {len(files)} lesson pictures on the dollar-bill plate")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
