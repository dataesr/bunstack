export type ColorFamily =
  | 'green-tilleul-verveine'
  | 'green-bourgeon'
  | 'green-emeraude'
  | 'green-menthe'
  | 'green-archipel'
  | 'blue-ecume'
  | 'blue-cumulus'
  | 'purple-glycine'
  | 'pink-macaron'
  | 'pink-tuile'
  | 'yellow-tournesol'
  | 'yellow-moutarde'
  | 'orange-terre-battue'
  | 'brown-cafe-creme'
  | 'brown-caramel'
  | 'brown-opera'
  | 'beige-gris-galet';

export type ColorType = 'info' | 'error' | 'warning' | 'success';

export type DSFRColors = ColorType | ColorFamily;
