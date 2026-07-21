export type UnitCategory = 'length' | 'weight' | 'area' | 'volume' | 'speed';

interface UnitDef {
  base: string;
  units: Record<string, number>; // factor to base unit
}

export const UNIT_DEFINITIONS: Record<UnitCategory, UnitDef> = {
  length: {
    base: 'm',
    units: { mm: 0.001, cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344 },
  },
  weight: {
    base: 'kg',
    units: { mg: 1e-6, g: 0.001, kg: 1, oz: 0.028349523125, lb: 0.45359237, t: 1000 },
  },
  area: {
    base: 'm2',
    units: { mm2: 1e-6, cm2: 1e-4, m2: 1, ha: 10000, km2: 1e6, ft2: 0.09290304, ac: 4046.8564224 },
  },
  volume: {
    base: 'L',
    units: {
      ml: 0.001,
      L: 1,
      m3: 1000,
      tsp: 0.00492892,
      tbsp: 0.0147868,
      cup: 0.236588,
      gal: 3.785411784,
      'fl-oz': 0.0295735,
    },
  },
  speed: {
    base: 'm/s',
    units: { 'm/s': 1, kph: 0.277778, mph: 0.44704, 'ft/s': 0.3048, knot: 0.514444 },
  },
};

export const UNIT_LABELS: Record<string, string> = {
  mm: 'Millimeter (mm)',
  cm: 'Centimeter (cm)',
  m: 'Meter (m)',
  km: 'Kilometer (km)',
  in: 'Inch (in)',
  ft: 'Foot (ft)',
  yd: 'Yard (yd)',
  mi: 'Mile (mi)',
  mg: 'Milligram (mg)',
  g: 'Gram (g)',
  kg: 'Kilogram (kg)',
  oz: 'Ounce (oz)',
  lb: 'Pound (lb)',
  t: 'Metric ton (t)',
  mm2: 'Square mm (mm²)',
  cm2: 'Square cm (cm²)',
  m2: 'Square meter (m²)',
  ha: 'Hectare (ha)',
  km2: 'Square km (km²)',
  ft2: 'Square foot (ft²)',
  ac: 'Acre (ac)',
  ml: 'Milliliter (ml)',
  L: 'Liter (L)',
  m3: 'Cubic meter (m³)',
  tsp: 'Teaspoon (tsp)',
  tbsp: 'Tablespoon (tbsp)',
  cup: 'Cup',
  gal: 'Gallon (gal)',
  'fl-oz': 'Fluid ounce (fl oz)',
  'm/s': 'Meter/sec (m/s)',
  kph: 'Km/hour (km/h)',
  mph: 'Mile/hour (mph)',
  'ft/s': 'Foot/sec (ft/s)',
  knot: 'Knot',
};

export function listUnits(category: UnitCategory): string[] {
  return Object.keys(UNIT_DEFINITIONS[category].units);
}

/** Convert a value between two units of the same category via the base unit. */
export function convertUnit(
  value: number,
  category: UnitCategory,
  from: string,
  to: string,
): number {
  const def = UNIT_DEFINITIONS[category];
  const fromF = def.units[from];
  const toF = def.units[to];
  if (fromF == null || toF == null) {
    throw new Error(`Unsupported unit conversion: ${from} → ${to}`);
  }
  const base = value * fromF;
  return base / toF;
}
