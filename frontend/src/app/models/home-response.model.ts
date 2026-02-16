import { Level } from './level.model';
import { NewsItem } from './news.model';
import { Testimonial } from './testimonial.model';

export interface HomeResponse {
    levels: Level[];
    news: NewsItem[];
    testimonials: Testimonial[];
}
