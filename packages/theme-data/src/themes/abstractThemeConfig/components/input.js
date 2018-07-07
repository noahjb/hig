export default {
  "INPUT.MIN_HEIGHT": { ref: "DENSITY.INPUT.MIN_HEIGHT" },
  "INPUT.VERTICAL_PADDING": { ref: "DENSITY.INPUT.VERTICAL_PADDING" },
  "INPUT.DENSITY_MEDIUM_MIN_HEIGHT": "24px",
  "INPUT.GRID_GUTTER_WIDTH": { ref: "DENSITY.SPACINGS.S" },
  "INPUT.BORDER_BOTTOM_COLOR": { abstract: true },
  "INPUT.BORDER_BOTTOM_WIDTH": { ref: "BASICS.BORDER_WIDTHS.S" },
  "INPUT.HOVER.BORDER_BOTTOM_COLOR": { abstract: true },
  "INPUT.FOCUS.BORDER_BOTTOM_COLOR": { abstract: true },
  "INPUT.FONT_COLOR": { ref: "COLOR_SCHEME.TEXT_COLOR" },
  "INPUT.DISABLED.FONT_COLOR": {
    ref: "COLOR_SCHEME.TEXT_COLOR",
    transform: { alpha: 0.2 }
  },
  "INPUT.HALO.COLOR": { abstract: true },
  "INPUT.HOVER.HALO.WIDTH": { ref: "BASICS.BORDER_WIDTHS.L" },
  "INPUT.FOCUS.HALO.WIDTH": { ref: "BASICS.BORDER_WIDTHS.L" },
  "INPUT.FOCUS.HALO.COLOR": { abstract: true },
  "INPUT.ACTIVE.HALO.WIDTH": { ref: "BASICS.BORDER_WIDTHS.L" },
  "INPUT.ACTIVE.HALO.COLOR": { abstract: true }
};
