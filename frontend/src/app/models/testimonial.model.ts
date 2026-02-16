export interface Testimonial {
    id: number;
    author_name: string; // API field
    content: string;
    author_image?: string; // API field
    rating?: number;
    role?: string; // Frontend might add this, or it's missing from API. 'Student' is hardcoded in component.
}
