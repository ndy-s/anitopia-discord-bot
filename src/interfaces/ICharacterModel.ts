import { Document, ObjectId } from 'mongoose';
import { ISkillModel } from './ISkillModel';

export interface IAttributes {
    health: number;
    attack: number;
    defense: number;
    speed: number;
}

interface ISkillReference {
    name: string;
    descriptions: Map<string, string>;
    skill: ObjectId | ISkillModel;
}

export interface ICharacterModel extends Document {
    name: string;
    fullname: string;
    series: string;
    element: 'Pyro' | 'Aqua' | 'Volt' | 'Terra' | 'Aero' | 'Lumen' | 'Shade' | 'Neutralis';
    class: 'Mage' | 'Warrior' | 'Tank' | 'Hunter' | 'Support';
    attributes: IAttributes;
    passiveSkill: ISkillReference;
    activeSkill: ISkillReference;
    quotes: string;
    createdAt: Date;
    updatedAt: Date;
}