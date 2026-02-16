export interface NewsItem {
    id: number;
    title: string;
    content?: string;
    image_path?: string; // API field
    published_at: string; // API field
}
