import { Megateam } from "@/utils/types";
import { MegateamList } from "./megateam";

// 2026-2027 Officers!!

const officerNames = [
    "Keiko Cheung",
    "Dominic Hidayat",
    "Ella Li",
    "Matthew Yen",
    "Akhil Kasamsetty",
    "Lia Chen",
    "Evan Chang",
    "Monica Zhang",
    "Harrison Li",
    "Chloe Cheong",
    "El Wu",
    "Evie Su",
    "Kylie Moon",
    "Kai Hammel",
    "Troy Donaghy",
    "Andrew Zhang",
    "Keilon Carrier",
    "Dylan Mire",
    "Maximilian Hsu",
    "Emily Dong",
];

export const OfficerList: Megateam[] = officerNames
    .map(name => MegateamList.find(officer => officer.name === name)!)
    .filter(Boolean);