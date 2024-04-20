/** @format */

import type { Member } from "@/interfaces";

export function createMemberList(): Map<number, Member> {
  const memberListInit = new Map<number, Member>();
  memberListInit.set(33456, {
    id: 33456,
    name: "データベース",
    email: "bow@example.com",
    points: 35,
    note: "ホームラン",
  });
  memberListInit.set(47783, {
    id: 47783,
    name: "ブルーベース",
    email: "mue@example.com",
    points: 53,
  });
  return memberListInit;
}
