import { Gender } from './types';

export const ACTIVITY_LEVELS = [
  { value: 1.2, label: '久坐/极低活动', description: '办公室工作，几乎无运动（每日步数 < 5000）' },
  { value: 1.375, label: '轻度活动', description: '日常轻度运动（如每日散步 30 分钟 + 家务）' },
  { value: 1.55, label: '中度活动', description: '每日 30-60 分钟中等强度运动（如快走、慢跑）' },
  { value: 1.725, label: '重度活动', description: '高强度运动或体力劳动（如健身 2 小时/天、搬运工）' },
];

export const PLAN_LEVELS = [
  { id: 'comfort', label: '舒适', multiplier: 0.15, comment: '循序渐进，极易坚持', impact: '对生活质量影响极小，适合长期维持。' },
  { id: 'standard', label: '标准', multiplier: 0.20, comment: '科学高效，主流选择', impact: '减脂速度适中，能较好兼顾体能与生活。' },
  { id: 'strict', label: '严格', multiplier: 0.25, comment: '快速见效，挑战意志', impact: '可能伴随饥饿感，建议在专业指导下进行。' },
  { id: 'manual', label: '自定义', multiplier: 0, comment: '灵活调整', impact: '根据您的个人节奏自由设定。' },
];

export interface BodyFatReference {
  percentage: number;
  maleImage: string;
  femaleImage: string;
}

export const BODY_FAT_REFERENCES: BodyFatReference[] = [
  { percentage: 10, maleImage: 'https://picsum.photos/seed/male-bf-10/300/400', femaleImage: 'https://picsum.photos/seed/female-bf-10/300/400' },
  { percentage: 15, maleImage: 'https://picsum.photos/seed/male-bf-15/300/400', femaleImage: 'https://picsum.photos/seed/female-bf-15/300/400' },
  { percentage: 20, maleImage: 'https://picsum.photos/seed/male-bf-20/300/400', femaleImage: 'https://picsum.photos/seed/female-bf-20/300/400' },
  { percentage: 25, maleImage: 'https://picsum.photos/seed/male-bf-25/300/400', femaleImage: 'https://picsum.photos/seed/female-bf-25/300/400' },
  { percentage: 30, maleImage: 'https://picsum.photos/seed/male-bf-30/300/400', femaleImage: 'https://picsum.photos/seed/female-bf-30/300/400' },
];
