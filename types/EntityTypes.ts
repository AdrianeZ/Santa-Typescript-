export interface ChildEntity {
    id: string;
    name: string;
    giftId: string | null
}

export interface GiftEntity {
    id?: string;
    name: string;
    count: number;
}

export interface countGift
{
    count: number;
}