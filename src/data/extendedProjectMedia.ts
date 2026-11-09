/** One-based source page numbers; preserve original order. References remain private. */
export interface DetailMedia {
  page: number
  src: string
  preview: string
  width: number
  height: number
  previewWidth: number
}

export const extendedProjectMedia: Record<string, DetailMedia[]> = {
  pavilions: [1, 2, 3, 4, 5].map(page => ({ page,
    src: `/images/projects/pavilions/image-${String(page).padStart(2, '0')}-2560.webp`,
    preview: `/images/projects/pavilions/image-${String(page).padStart(2, '0')}-1280.webp`,
    width: 2560, height: 1810, previewWidth: 1280,
  })),
  "baidu-netdisk": [
    {
      "page": 1,
      "src": "/images/projects/baidu-netdisk/pdf-page-001.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-001-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 2,
      "src": "/images/projects/baidu-netdisk/pdf-page-002.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-002-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 3,
      "src": "/images/projects/baidu-netdisk/pdf-page-003.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-003-1280.webp",
      "width": 2560,
      "height": 2238,
      "previewWidth": 1280
    },
    {
      "page": 4,
      "src": "/images/projects/baidu-netdisk/pdf-page-004.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-004-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 5,
      "src": "/images/projects/baidu-netdisk/pdf-page-005.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-005-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 6,
      "src": "/images/projects/baidu-netdisk/pdf-page-006.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-006-1280.webp",
      "width": 2560,
      "height": 3939,
      "previewWidth": 1280
    },
    {
      "page": 7,
      "src": "/images/projects/baidu-netdisk/pdf-page-007.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-007-1280.webp",
      "width": 2560,
      "height": 1368,
      "previewWidth": 1280
    },
    {
      "page": 8,
      "src": "/images/projects/baidu-netdisk/pdf-page-008.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-008-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 9,
      "src": "/images/projects/baidu-netdisk/pdf-page-009.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-009-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 10,
      "src": "/images/projects/baidu-netdisk/pdf-page-010.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-010-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 11,
      "src": "/images/projects/baidu-netdisk/pdf-page-011.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-011-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 12,
      "src": "/images/projects/baidu-netdisk/pdf-page-012.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-012-1280.webp",
      "width": 2560,
      "height": 2804,
      "previewWidth": 1280
    },
    {
      "page": 13,
      "src": "/images/projects/baidu-netdisk/pdf-page-013.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-013-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 14,
      "src": "/images/projects/baidu-netdisk/pdf-page-014.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-014-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 15,
      "src": "/images/projects/baidu-netdisk/pdf-page-015.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-015-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 16,
      "src": "/images/projects/baidu-netdisk/pdf-page-016.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-016-1280.webp",
      "width": 2560,
      "height": 1272,
      "previewWidth": 1280
    },
    {
      "page": 17,
      "src": "/images/projects/baidu-netdisk/pdf-page-017.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-017-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 18,
      "src": "/images/projects/baidu-netdisk/pdf-page-018.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-018-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 19,
      "src": "/images/projects/baidu-netdisk/pdf-page-019.webp",
      "preview": "/images/projects/baidu-netdisk/pdf-page-019-1280.webp",
      "width": 2560,
      "height": 1282,
      "previewWidth": 1280
    }
  ],
  "chess-box": [
    {
      "page": 4,
      "src": "/images/projects/chess-box/pdf-page-004.webp",
      "preview": "/images/projects/chess-box/pdf-page-004-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 5,
      "src": "/images/projects/chess-box/pdf-page-005.webp",
      "preview": "/images/projects/chess-box/pdf-page-005-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 6,
      "src": "/images/projects/chess-box/pdf-page-006.webp",
      "preview": "/images/projects/chess-box/pdf-page-006-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 7,
      "src": "/images/projects/chess-box/pdf-page-007.webp",
      "preview": "/images/projects/chess-box/pdf-page-007-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 8,
      "src": "/images/projects/chess-box/pdf-page-008.webp",
      "preview": "/images/projects/chess-box/pdf-page-008-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 9,
      "src": "/images/projects/chess-box/pdf-page-009.webp",
      "preview": "/images/projects/chess-box/pdf-page-009-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 10,
      "src": "/images/projects/chess-box/pdf-page-010.webp",
      "preview": "/images/projects/chess-box/pdf-page-010-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 11,
      "src": "/images/projects/chess-box/pdf-page-011.webp",
      "preview": "/images/projects/chess-box/pdf-page-011-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 12,
      "src": "/images/projects/chess-box/pdf-page-012.webp",
      "preview": "/images/projects/chess-box/pdf-page-012-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 13,
      "src": "/images/projects/chess-box/pdf-page-013.webp",
      "preview": "/images/projects/chess-box/pdf-page-013-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 14,
      "src": "/images/projects/chess-box/pdf-page-014.webp",
      "preview": "/images/projects/chess-box/pdf-page-014-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 15,
      "src": "/images/projects/chess-box/pdf-page-015.webp",
      "preview": "/images/projects/chess-box/pdf-page-015-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 16,
      "src": "/images/projects/chess-box/pdf-page-016.webp",
      "preview": "/images/projects/chess-box/pdf-page-016-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 17,
      "src": "/images/projects/chess-box/pdf-page-017.webp",
      "preview": "/images/projects/chess-box/pdf-page-017-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 18,
      "src": "/images/projects/chess-box/pdf-page-018.webp",
      "preview": "/images/projects/chess-box/pdf-page-018-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 19,
      "src": "/images/projects/chess-box/pdf-page-019.webp",
      "preview": "/images/projects/chess-box/pdf-page-019-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 20,
      "src": "/images/projects/chess-box/pdf-page-020.webp",
      "preview": "/images/projects/chess-box/pdf-page-020-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 21,
      "src": "/images/projects/chess-box/pdf-page-021.webp",
      "preview": "/images/projects/chess-box/pdf-page-021-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 22,
      "src": "/images/projects/chess-box/pdf-page-022.webp",
      "preview": "/images/projects/chess-box/pdf-page-022-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 23,
      "src": "/images/projects/chess-box/pdf-page-023.webp",
      "preview": "/images/projects/chess-box/pdf-page-023-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 24,
      "src": "/images/projects/chess-box/pdf-page-024.webp",
      "preview": "/images/projects/chess-box/pdf-page-024-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 25,
      "src": "/images/projects/chess-box/pdf-page-025.webp",
      "preview": "/images/projects/chess-box/pdf-page-025-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 26,
      "src": "/images/projects/chess-box/pdf-page-026.webp",
      "preview": "/images/projects/chess-box/pdf-page-026-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 27,
      "src": "/images/projects/chess-box/pdf-page-027.webp",
      "preview": "/images/projects/chess-box/pdf-page-027-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 28,
      "src": "/images/projects/chess-box/pdf-page-028.webp",
      "preview": "/images/projects/chess-box/pdf-page-028-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 29,
      "src": "/images/projects/chess-box/pdf-page-029.webp",
      "preview": "/images/projects/chess-box/pdf-page-029-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 30,
      "src": "/images/projects/chess-box/pdf-page-030.webp",
      "preview": "/images/projects/chess-box/pdf-page-030-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 31,
      "src": "/images/projects/chess-box/pdf-page-031.webp",
      "preview": "/images/projects/chess-box/pdf-page-031-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 32,
      "src": "/images/projects/chess-box/pdf-page-032.webp",
      "preview": "/images/projects/chess-box/pdf-page-032-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 33,
      "src": "/images/projects/chess-box/pdf-page-033.webp",
      "preview": "/images/projects/chess-box/pdf-page-033-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 34,
      "src": "/images/projects/chess-box/pdf-page-034.webp",
      "preview": "/images/projects/chess-box/pdf-page-034-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 35,
      "src": "/images/projects/chess-box/pdf-page-035.webp",
      "preview": "/images/projects/chess-box/pdf-page-035-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 36,
      "src": "/images/projects/chess-box/pdf-page-036.webp",
      "preview": "/images/projects/chess-box/pdf-page-036-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 37,
      "src": "/images/projects/chess-box/pdf-page-037.webp",
      "preview": "/images/projects/chess-box/pdf-page-037-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 38,
      "src": "/images/projects/chess-box/pdf-page-038.webp",
      "preview": "/images/projects/chess-box/pdf-page-038-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 39,
      "src": "/images/projects/chess-box/pdf-page-039.webp",
      "preview": "/images/projects/chess-box/pdf-page-039-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 40,
      "src": "/images/projects/chess-box/pdf-page-040.webp",
      "preview": "/images/projects/chess-box/pdf-page-040-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 41,
      "src": "/images/projects/chess-box/pdf-page-041.webp",
      "preview": "/images/projects/chess-box/pdf-page-041-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 42,
      "src": "/images/projects/chess-box/pdf-page-042.webp",
      "preview": "/images/projects/chess-box/pdf-page-042-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 43,
      "src": "/images/projects/chess-box/pdf-page-043.webp",
      "preview": "/images/projects/chess-box/pdf-page-043-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 44,
      "src": "/images/projects/chess-box/pdf-page-044.webp",
      "preview": "/images/projects/chess-box/pdf-page-044-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 45,
      "src": "/images/projects/chess-box/pdf-page-045.webp",
      "preview": "/images/projects/chess-box/pdf-page-045-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 46,
      "src": "/images/projects/chess-box/pdf-page-046.webp",
      "preview": "/images/projects/chess-box/pdf-page-046-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 47,
      "src": "/images/projects/chess-box/pdf-page-047.webp",
      "preview": "/images/projects/chess-box/pdf-page-047-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 48,
      "src": "/images/projects/chess-box/pdf-page-048.webp",
      "preview": "/images/projects/chess-box/pdf-page-048-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 49,
      "src": "/images/projects/chess-box/pdf-page-049.webp",
      "preview": "/images/projects/chess-box/pdf-page-049-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 50,
      "src": "/images/projects/chess-box/pdf-page-050.webp",
      "preview": "/images/projects/chess-box/pdf-page-050-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 51,
      "src": "/images/projects/chess-box/pdf-page-051.webp",
      "preview": "/images/projects/chess-box/pdf-page-051-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 52,
      "src": "/images/projects/chess-box/pdf-page-052.webp",
      "preview": "/images/projects/chess-box/pdf-page-052-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 53,
      "src": "/images/projects/chess-box/pdf-page-053.webp",
      "preview": "/images/projects/chess-box/pdf-page-053-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 54,
      "src": "/images/projects/chess-box/pdf-page-054.webp",
      "preview": "/images/projects/chess-box/pdf-page-054-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    }
  ],
  "secondhand-bookshop": [
    {
      "page": 1,
      "src": "/images/projects/secondhand-bookshop/image-01.webp",
      "preview": "/images/projects/secondhand-bookshop/image-01-1280.webp",
      "width": 2480,
      "height": 3508,
      "previewWidth": 1280
    },
    {
      "page": 2,
      "src": "/images/projects/secondhand-bookshop/image-02.webp",
      "preview": "/images/projects/secondhand-bookshop/image-02-1280.webp",
      "width": 1190,
      "height": 1684,
      "previewWidth": 1190
    },
    {
      "page": 3,
      "src": "/images/projects/secondhand-bookshop/image-03.webp",
      "preview": "/images/projects/secondhand-bookshop/image-03-1280.webp",
      "width": 2560,
      "height": 1809,
      "previewWidth": 1280
    },
    {
      "page": 4,
      "src": "/images/projects/secondhand-bookshop/image-04.webp",
      "preview": "/images/projects/secondhand-bookshop/image-04-1280.webp",
      "width": 2560,
      "height": 1810,
      "previewWidth": 1280
    },
    {
      "page": 5,
      "src": "/images/projects/secondhand-bookshop/image-05.webp",
      "preview": "/images/projects/secondhand-bookshop/image-05-1280.webp",
      "width": 2560,
      "height": 1437,
      "previewWidth": 1280
    },
    {
      "page": 6,
      "src": "/images/projects/secondhand-bookshop/image-06.webp",
      "preview": "/images/projects/secondhand-bookshop/image-06-1280.webp",
      "width": 2560,
      "height": 1810,
      "previewWidth": 1280
    }
  ],
  "chess-box-intro": [
    {
      "page": 1,
      "src": "/images/projects/chess-box-intro/image-01.webp",
      "preview": "/images/projects/chess-box-intro/image-01-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    },
    {
      "page": 2,
      "src": "/images/projects/chess-box-intro/image-02.webp",
      "preview": "/images/projects/chess-box-intro/image-02-1280.webp",
      "width": 2560,
      "height": 1440,
      "previewWidth": 1280
    }
  ]
}
