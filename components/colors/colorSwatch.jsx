function getContrastColor(hexColor) {
  // Remove # if present
  const hex = hexColor.replace("#", "");

  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black for light colors, white for dark colors
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

export default function ColorSwatch({ color }) {
  const textColor = getContrastColor(color.hex);

  return (
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
        {/* Color Block */}
        <div
          className="aspect-square w-full"
          style={{ backgroundColor: color.hex }}
          aria-label={`${color.name} color swatch`}
        >
          {/* Overlay with color info - visible on hover */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ backgroundColor: color.hex }}
          >
            <div className="text-center px-4" style={{ color: textColor }}>
              <p className="font-bold text-lg mb-1">{color.hex}</p>
              <p className="text-sm opacity-90">{color.pantone}</p>
            </div>
          </div>
        </div>

        {/* Color Info - Always visible */}
        <div className="bg-white p-4">
          <h3 className="font-bold text-gray-900 text-lg mb-1">{color.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{color.pantone}</p>
          <div className="flex flex-wrap gap-1">
            {color.usage.map((use) => (
              <span
                key={use}
                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
              >
                {use}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
