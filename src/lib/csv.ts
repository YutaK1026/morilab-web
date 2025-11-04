import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { cache } from 'react';
import {
  normalizeMembersByYearAndPost,
  normalizePublicationsByYearAndPost,
} from './utils';

export type News = { id: string; date: string; author: string; title: string };
export type Member = { id: string; name: string; post: string[]; year: string };
export type Publication = {
  id: string;
  year: string;
  genre: string[];
  publications: string;
};

const dataDir = path.join(process.cwd(), 'data');

// CSVファイルを読み込むヘルパー関数
function readCSV<T>(filename: string): T[] {
  const filePath = path.join(dataDir, filename);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // 行を分割
  const lines = fileContent.split('\n');

  // 1行目（説明行）をスキップして、2行目（ヘッダー行）以降を処理
  // 2行目がヘッダー行、3行目以降がデータ行
  const headerLine = lines[1]; // 2行目がヘッダー
  const dataLines = lines.slice(2); // 3行目以降がデータ

  // ヘッダー行をパース（引用符を含むカラムを正しく処理）
  // 最初のカラム（説明文）を除去して、実際のカラム名のみを取得
  const headerParts = parse(headerLine, {
    columns: false,
    skip_empty_lines: false,
    relax_quotes: true,
  })[0] as string[];

  // 最初のカラム（説明文）を除去して、実際のカラム名のみを使用
  const headers = headerParts
    .slice(1) // 最初のカラム（コンテンツIDの説明）を除去
    .map((h) => h.trim().replace(/^"|"$/g, ''))
    .filter((h) => h.length > 0); // 空のヘッダーを除去

  // データをパース（最初のカラムも含めて読み込み、後で除去）
  const allRecords = parse(dataLines.join('\n'), {
    columns: false,
    skip_empty_lines: true,
    trim: true,
    relax_quotes: true,
    relax_column_count: true,
  });

  // 最初のカラム（ID）を除去して、実際のデータのみをオブジェクトに変換
  return allRecords.map((record: string[]) => {
    const obj: Record<string, string> = {};
    // 最初のカラム（ID）をスキップして、ヘッダーとマッピング
    record.slice(1).forEach((value, index) => {
      if (headers[index]) {
        obj[headers[index]] = value;
      }
    });
    return obj;
  }) as T[];
}

// Newsデータの取得
export const fetchLatestNews = cache(async (): Promise<News[]> => {
  const records = readCSV<{ id: string; date: string; title: string }>('news.csv');

  return records
    .map((record) => ({
      id: record.id || '',
      date: record.date,
      author: '', // CSVにはauthorがない場合は空文字
      title: record.title,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);
});

export const fetchAllNews = cache(async (): Promise<News[]> => {
  const records = readCSV<{ id: string; date: string; title: string }>('news.csv');

  return records
    .map((record) => ({
      id: record.id || '',
      date: record.date,
      author: '',
      title: record.title,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
});

// Membersデータの取得
export const fetchMembers = cache(
  async (): Promise<Record<string, Record<string, string[]>>> => {
    const records = readCSV<{ id: string; year: string; name: string; post: string }>('members.csv');

    const members: Member[] = records.map((record) => ({
      id: record.id || '',
      year: record.year,
      name: record.name,
      post: record.post ? record.post.split(',').map((p) => p.trim()) : [],
    }));

    return normalizeMembersByYearAndPost(members);
  }
);

// Publicationsデータの取得
export const fetchPublications = cache(
  async (): Promise<Record<string, Record<string, string[]>>> => {
    const records = readCSV<{ id: string; year: string; genre: string; publications: string }>('publications.csv');

    const publications: Publication[] = records.map((record) => ({
      id: record.id || '',
      year: record.year,
      genre: record.genre ? record.genre.split(',').map((g) => g.trim()) : [],
      publications: record.publications || '',
    }));

    return normalizePublicationsByYearAndPost(publications);
  }
);

