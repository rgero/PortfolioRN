import { IconButton, useTheme } from 'react-native-paper';
import React, { useEffect, useState } from 'react';

import { SvgXml } from 'react-native-svg';
import { openLink } from '../../utils/openLink';

const ItchIconButton = () => {
  const [svgContent, setSvgContent] = useState('');
  const theme = useTheme();

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch('https://static.itch.io/images/itchio-textless-white.svg');
        let svg = await response.text();

        // Modify the SVG to change the fill color
        svg = svg.replace(/fill=".*?"/g, `fill="${theme.colors.onSurfaceVariant}"`);

        // Add a transform to offset the SVG vertically
        svg = svg.replace(
          /<svg([^>]*)>/,
          `<svg$1><g transform="translate(0, 25)">` // Offset 10 units down
        );
        svg = svg.replace(/<\/svg>/, `</g></svg>`);

        setSvgContent(svg);
      } catch (error) {
        console.error('Failed to fetch SVG:', error);
      }
    };

    fetchSvg();
  }, [theme.colors.onSurfaceVariant]); // Re-run effect if theme color changes

  return svgContent ? (
    <IconButton
      icon={() => <SvgXml xml={svgContent} width={24} height={24} />}
      onPress={() => openLink('https://roymond.itch.io')}
    />
  ) : null;
};

export default ItchIconButton;
