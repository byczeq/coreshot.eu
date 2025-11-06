import type { Locale } from '../i18n/translations';

export async function loadMarkdownContent(
  type: 'privacy' | 'terms',
  locale: Locale,
): Promise<string> {
  try {
    const content = await import(`../content/legal/${type}-${locale}.md?raw`);
    return content.default;
  } catch (error) {
    console.error(`Failed to load ${type} for locale ${locale}:`, error);
    return '';
  }
}
