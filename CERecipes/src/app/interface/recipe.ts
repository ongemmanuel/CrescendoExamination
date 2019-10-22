export interface Recipe {
    uuid: string;
    title: string;
    description: string;
    images?: {
        full: string;
        medium: string;
        small: string;
    }
    servings: number;
    prepTime: number;
    cookTime: number;
    postDate: Date;
    editDate?: Date;
    ingredients: [
        {
            uuid: string;
            amount: number;
            measurement: string;
            name: string;
        }
    ]
    directions: [
        {
            instructions: string;
            optional: boolean;
        }
    ]
}
