# Frame

A starting point for any project.

## Requirements

- SASS

## Usage

`git clone https://github.com/leonp/frame.git`

## How it works

- Calls the Pure CSS buttons, form and tables modules
- Simple CSS reset
- Sets font size and line height
- Sets some simple classes: .hide, .clearfix
- Sets a simple 6 column % grid at widescreen breakpoint

## SASS imports

`style.scss` imports:

- `_base.scss`
- `_grid.scss`

## SASS variables

### Size and ryhthm

- `$base-line-height: 1.4;`
- `$widescreen-font-size: 125%;`

### Breakpoint

`$widescreen-breakpoint: "screen and (min-width: 900px)";`

### Font

- `$primary-font-stack: 'Fira Sans', sans-serif;`
- `$secondary-font-stack: 'Droid Serif', georgia, serif;`

### Colours

- `$black: #000;`
- `$dark: #444;`
- `$light: #FFF;`
- `$grey: #AAA;`
- `$lgrey: #F9F9F9;`
- `$highlight: #FFD000;`
- `$link: #0000FF;`
- `$visited: #7F7FFF;`
- `$active: #000;`
- `$hover: #FFD000;`

## Grid

### Column widths

- 1: 15%
- 2: 32%
- 3: 49%
- 4: 66%
- 5: 83%
- 6: 100%

### Positioning

Columns are floated left or right. Left floated columns have a 2% right margin. Right floated columns have a 2% left margin.

### Usage

Wrap columns in the `g-row` class.

Use the `g-left` and `g-right` classes to float columns.

Use `g-col1` to `g-col6` to set column width.

Use `g-last` to remove the left and right margins from a column.

By default grids only work when the screen reaches the widescreen breakpoint width (defined in `style.scss`). If you want to apply a grid at narrow screen widths use the `n` modifier in the class names, e.g.:

- `g-n-col2`
- `g-n-left`
- `g-n-last`

**Note**: `g-row` doesn't need the `n` modifier.