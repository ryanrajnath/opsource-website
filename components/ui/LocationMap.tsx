"use client";

export interface CityDot {
  id: string;
  city: string;
  state: string;
  cx: number;
  cy: number;
  isHQ?: boolean;
}

export const cityDots: CityDot[] = [
  // SC cities — coordinates in the 960x600 US map space, cropped via viewBox
  { id: "greenville", city: "Greenville", state: "SC", cx: 724, cy: 358 },
  { id: "spartanburg", city: "Spartanburg", state: "SC", cx: 735, cy: 353, isHQ: true },
  { id: "anderson", city: "Anderson", state: "SC", cx: 727, cy: 364 },
  { id: "gaffney", city: "Gaffney", state: "SC", cx: 742, cy: 347 },
  { id: "greenwood", city: "Greenwood", state: "SC", cx: 736, cy: 373 },
  { id: "columbia", city: "Columbia", state: "SC", cx: 756, cy: 375 },
  { id: "charleston", city: "Charleston", state: "SC", cx: 777, cy: 391 },
  { id: "summerville", city: "Summerville", state: "SC", cx: 776, cy: 389 },
  // NC
  { id: "arden", city: "Arden", state: "NC", cx: 716, cy: 337 },
  // TN
  { id: "kingsport", city: "Kingsport", state: "TN", cx: 720, cy: 318 },
];

// Real geographic SVG paths (public domain, Wikimedia Commons)
const statePaths = {
  // Context states (gray)
  VA: "M831.6,266L831.4,264.1L837.9,261.5L837.1,264.7L834.2,268.5L833.8,273.1L834.3,276.5L832.4,281.5L830.3,283.4L828.8,278.7L829.2,273.3L830.8,269.1L831.6,266zM834.9,294.3L776.8,306.9L739.3,312.2L732.6,311.8L730.1,313.7L722.7,313.9L714.3,314.9L703.4,316.5L713.9,310.9L713.9,308.9L715.4,306.7L726,295.2L729.9,299.7L733.7,300.6L736.2,299.5L738.5,298.2L741,299.5L744.9,298.1L746.8,293.6L749.4,294.1L752.3,292L754.1,292.5L756.9,288.8L757.2,286.7L756.3,285.4L757.3,283.6L762.5,271.3L763.2,265.5L764.4,265L766.6,267.5L770.5,267.2L772.4,259.6L775.2,259L776.3,256.3L778.9,253.9L781.6,248.2L781.7,243.2L791.5,247C792.2,247.3 792.4,241.9 792.4,241.9L796,243.5L796.1,246.5L801.9,247.8L804,249L805.7,251L805,254.7L803.1,257.3L803.2,259.3L803.8,261.2L808.7,262.4L813.2,262.5L816.3,263.4L818.2,263.7L818.9,266.8L822.1,267.2L823,268.4L822.5,273.1L823.9,274.2L823.4,276.2L824.7,276.9L824.4,278.3L821.7,278.2L821.8,279.9L824.1,281.4L824.2,282.8L826,284.6L826.5,287.1L823.9,288.5L825.5,290L831.3,288.3L834.9,294.3z",
  GA: "M672.2,355.5L672.2,357.7L672.4,359.8L673.1,363.2L676.4,371.1L678.9,381L680.3,387.1L681.9,392L683.4,398.9L685.5,405.2L688.1,408.6L688.6,412L690.5,412.8L690.7,414.9L688.9,419.8L688.4,423L688.2,424.9L689.9,429.3L690.2,434.6L689.4,437.1L690,437.9L691.5,438.7L691.7,441.9L693.9,445.2L696.2,447.4L704.1,447.6L714.9,446.9L736.4,445.6L741.9,445L746.4,445L746.6,447.9L749.2,448.7L749.5,444.3L747.9,439.8L749,438.2L754.9,439L759.8,439.3L759.1,433L761.3,423L762.8,418.8L762.3,416.2L765.6,410L765.1,408.6L763.2,409.3L760.6,408L760,405.9L758.7,402.4L756.4,400.3L753.8,399.6L752.2,394.8L749.3,388.4L745.1,386.5L743,384.6L741.7,382L739.6,380L737.3,378.7L735.1,375.8L732,373.6L727.5,371.8L727,370.3L724.5,367.4L724.1,366L720.7,361L717.1,361.1L713.4,358.7L712,357.4L711.6,355.7L712.5,353.7L714.7,352.6L714.1,350.5L672.2,355.5z",
  AL: "M631.3,460.4L629.8,446L627,427.3L627.2,413.2L628,382.2L627.8,365.5L628,359.1L672.5,355.5L672.3,357.7L672.5,359.8L673.1,363.2L676.5,371.1L679,381L680.4,387.1L682,392L683.5,398.9L685.6,405.2L688.2,408.6L688.7,412L690.6,412.8L690.8,414.9L689,419.8L688.5,423L688.3,424.9L689.9,429.3L690.3,434.6L689.5,437.1L690.1,437.9L691.6,438.7L691.9,441.6L686.3,441.2L679.5,441.9L654,444.8L643.6,446.2L643.3,449L645.1,450.8L647.7,452.8L648.3,460.7L642.7,463.3L640,463L642.7,461L642.7,460L639.7,454.1L637.4,453.4L635.9,457.8L634.7,460.5L634,460.4L631.3,460.4z",
  FL: "M759.8,439.1L762,446.4L765.8,456.2L771.1,465.5L774.8,471.8L779.7,477.3L783.7,481L785.3,484L784.2,485.3L783.4,486.5L786.3,494L789.2,496.9L791.8,502.2L795.3,508L799.9,516.3L801.2,523.9L801.7,535.9L802.3,537.6L802,541L799.5,542.3L799.9,544.3L799.2,546.2L799.5,548.6L800,550.6L797.3,553.8L794.2,555.3L790.3,555.4L788.9,557L786.5,558L785.2,557.5L784,556.5L783.7,553.6L782.9,550.2L779.5,545.1L775.9,542.8L772.1,542.5L771.3,543.8L768.2,539.4L767.5,535.9L765,531.8L763.2,530.7L761.6,532.8L759.8,532.5L757.7,527.4L754.8,523.6L751.9,518.2L749.3,515.2L745.7,511.4L747.8,509L751.1,503.5L750.9,501.9L746.4,500.9L744.7,501.6L745.1,502.2L747.7,503.2L746.2,507.7L745.4,508.2L743.6,504.2L742.3,499.3L742,496.6L743.5,491.9L743.5,482.3L740.4,478.6L739.1,475.6L733.9,474.3L732,473.6L730.4,471L727,469.4L725.8,466L723.1,465L720.7,461.3L716.5,459.9L713.5,458.4L711,458.4L706.9,459.2L706.8,461.2L707.6,462.1L707.1,463.3L704,463.1L700.3,466.7L696.7,468.6L692.9,468.6L689.6,469.9L689.3,467.1L687.7,465.2L684.8,464.1L683.2,462.6L675.1,458.7L667.5,457L663.1,457.6L657.1,458.1L651.1,460.2L647.7,460.8L647.4,452.8L644.8,450.8L643.1,449L643.4,446L653.6,444.7L679.1,441.8L685.9,441.1L691.3,441.4L693.9,445.3L695.4,446.7L703.5,447.2L714.3,446.6L735.8,445.3L741.3,444.6L746.4,444.8L746.8,447.7L749,448.6L749.3,443.9L747.7,439.8L749,438.3L754.6,438.8L759.8,439.1z",
  // Highlighted states (navy)
  TN: "M696.6,318.2L644.7,323.2L629,325L624.4,325.5L620.5,325.5L620.3,329.6L612.1,329.8L605.1,330.5L597,330.4L595.6,337.4L593.9,342.9L590.6,345.7L589.3,350.1L589,352.6L584.9,354.9L586.4,358.5L585.4,362.8L584.4,363.6L692.6,353.2L693,349.2L694.8,347.8L697.6,347L698.3,343.3L702.4,340.6L706.5,339.1L710.5,335.5L715,333.5L715.5,330.4L719.6,326.4L720.1,326.3C720.1,326.3 720.1,327.5 721,327.5C721.8,327.5 722.9,327.8 722.9,327.8L725.2,324.2L727.2,323.6L729.5,323.9L731.1,320.3L734.1,317.7L734.5,315.8L734.8,312.1L732.6,311.9L730,313.9L723,313.9L704.7,316.3L696.6,318.2z",
  NC: "M834.9,294.3L837,299.2L840.6,305.6L843,308.1L843.6,310.3L841.2,310.5L842,311.1L841.7,315.3L839.1,316.6L838.5,318.7L837.2,321.7L833.5,323.3L831,322.9L829.6,322.8L828,321.5L828.3,322.8L828.3,323.8L830.2,323.8L831,325L829.1,331.4L833.3,331.4L833.9,333L836.2,330.7L837.5,330.2L835.6,333.8L832.5,338.6L831.2,338.6L830.1,338.1L827.3,338.8L822.1,341.2L815.7,346.5L812.3,351.2L810.3,357.7L809.9,360.1L805.2,360.6L799.7,362L789.8,353.7L777.2,346.1L774.3,345.3L761.6,346.8L757.4,347.5L755.7,344.3L752.8,342.2L736.3,342.7L729,343.5L720,348L713.8,350.6L692.6,353.2L693.1,349.1L694.9,347.7L697.7,347L698.3,343.3L702.5,340.6L706.4,339.1L710.6,335.6L715,333.5L715.6,330.4L719.5,326.5L720.1,326.3C720.1,326.3 720.1,327.5 720.9,327.5C721.8,327.5 722.9,327.8 722.9,327.8L725.1,324.2L727.3,323.6L729.5,323.9L731.1,320.4L734,317.8L734.5,315.7L734.7,312L739,312L746.2,311.1L761.9,308.9L777.1,306.8L798.7,302.1L818.7,297.8L829.9,295.4L834.9,294.3zM839.2,327.5L841.8,325L844.9,322.4L846.5,321.7L846.6,319.7L846,313.6L844.5,311.2L843.9,309.4L844.6,309.1L847.4,314.6L847.8,319.1L847.6,322.5L844.2,324L841.4,326.4L840.3,327.6L839.2,327.5z",
  SC: "M764.9,408.1L763.1,409.1L760.5,407.8L759.9,405.7L758.6,402.1L756.3,400L753.7,399.4L752.1,394.5L749.4,388.6L745.2,386.6L743.1,384.7L741.8,382.1L739.7,380.1L737.4,378.9L735.1,375.9L732.1,373.7L727.6,371.9L727.1,370.4L724.6,367.5L724.2,366.1L720.8,360.9L717.4,361.1L713.3,358.6L712,357.4L711.7,355.6L712.5,353.6L714.8,352.7L714.3,350.4L720,348L729.2,343.5L736.9,342.6L753,342.2L755.7,344.1L757.4,347.5L761.7,346.8L774.3,345.4L777.2,346.2L789.8,353.8L799.9,361.9L794.5,367.4L791.9,373.5L791.4,379.8L789.8,380.6L788.7,383.4L786.2,384L784.1,387.6L781.4,390.3L779.1,393.7L777.5,394.5L773.9,397.9L771,398.1L772,401.3L767,406.8L764.9,408.1z",
};

function starPoints(cx: number, cy: number, outerR: number, innerR: number): string {
  const points: string[] = [];
  for (let i = 0; i < 5; i++) {
    const outerAngle = (Math.PI / 2) + (i * 2 * Math.PI / 5);
    const innerAngle = outerAngle + Math.PI / 5;
    points.push(`${cx - outerR * Math.cos(outerAngle)},${cy - outerR * Math.sin(outerAngle)}`);
    points.push(`${cx - innerR * Math.cos(innerAngle)},${cy - innerR * Math.sin(innerAngle)}`);
  }
  return points.join(" ");
}

interface LocationMapProps {
  hoveredCity: string | null;
  onHoverCity: (id: string | null) => void;
}

export function LocationMap({ hoveredCity, onHoverCity }: LocationMapProps) {
  return (
    <div className="relative w-full">
      <svg
        viewBox="575 240 280 190"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Map of southeastern United States showing Opsource office locations"
      >
        {/* Context states — light gray */}
        <path d={statePaths.VA} fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="0.8" />
        <path d={statePaths.GA} fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="0.8" />

        {/* Highlighted states — navy */}
        <path d={statePaths.TN} fill="#1E3A8A" fillOpacity="0.15" stroke="#1E3A8A" strokeWidth="1.2" />
        <path d={statePaths.NC} fill="#1E3A8A" fillOpacity="0.15" stroke="#1E3A8A" strokeWidth="1.2" />
        <path d={statePaths.SC} fill="#1E3A8A" fillOpacity="0.15" stroke="#1E3A8A" strokeWidth="1.2" />

        {/* State labels */}
        <text x="640" y="348" textAnchor="middle" fill="#1E3A8A" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" opacity="0.5">TN</text>
        <text x="780" y="325" textAnchor="middle" fill="#1E3A8A" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" opacity="0.5">NC</text>
        <text x="750" y="395" textAnchor="middle" fill="#1E3A8A" fontSize="7" fontWeight="700" fontFamily="system-ui, sans-serif" opacity="0.5">SC</text>
        <text x="690" y="400" textAnchor="middle" fill="#94A3B8" fontSize="5" fontWeight="600" fontFamily="system-ui, sans-serif" opacity="0.4">GA</text>
        <text x="790" y="280" textAnchor="middle" fill="#94A3B8" fontSize="5" fontWeight="600" fontFamily="system-ui, sans-serif" opacity="0.4">VA</text>

        {/* City dots */}
        {cityDots.map((city) => {
          const isHovered = hoveredCity === city.id;
          return (
            <g
              key={city.id}
              onMouseEnter={() => onHoverCity(city.id)}
              onMouseLeave={() => onHoverCity(null)}
              className="cursor-pointer"
            >
              {/* Pulse ring */}
              <circle
                cx={city.cx}
                cy={city.cy}
                r={isHovered ? 7 : 5}
                fill="#EA580C"
                fillOpacity={isHovered ? 0.4 : 0.25}
                className="animate-pulse-dot"
                style={{ transformOrigin: `${city.cx}px ${city.cy}px` }}
              />
              {/* Solid dot or star for HQ */}
              {city.isHQ ? (
                <polygon
                  points={starPoints(city.cx, city.cy, isHovered ? 4.5 : 3.5, isHovered ? 2 : 1.5)}
                  fill="#EA580C"
                  stroke="white"
                  strokeWidth="0.8"
                  className="transition-all duration-200"
                />
              ) : (
                <circle
                  cx={city.cx}
                  cy={city.cy}
                  r={isHovered ? 3.5 : 2.5}
                  fill="#EA580C"
                  stroke="white"
                  strokeWidth="1"
                  className="transition-all duration-200"
                />
              )}
              {/* Tooltip on hover */}
              {isHovered && (
                <g>
                  <rect
                    x={city.cx + 5}
                    y={city.cy - 12}
                    width={(city.city.length + city.state.length + 2) * 5 + 12}
                    height={16}
                    rx="3"
                    fill="#1E293B"
                    fillOpacity="0.92"
                  />
                  <text
                    x={city.cx + 11}
                    y={city.cy - 1}
                    fill="white"
                    fontSize="8"
                    fontWeight="600"
                    fontFamily="system-ui, sans-serif"
                  >
                    {city.city}, {city.state}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
