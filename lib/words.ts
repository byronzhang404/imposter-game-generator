export const WORD_PAIRS: Array<[string, string]> = [
  // 示例词语对（中文）
  ["苹果", "香蕉"],
  ["猫", "狗"],
  ["老师", "教授"],
  ["海", "湖"],
  ["火车", "地铁"],
  // 英文示例，默认界面英文时可使用
  ["apple", "banana"],
  ["cat", "dog"],
  ["teacher", "professor"],
  ["sea", "lake"],
  ["train", "metro"],
];

export function getRandomWordPair() {
  const idx = Math.floor(Math.random() * WORD_PAIRS.length);
  return WORD_PAIRS[idx];
}