import { Injectable } from '@nestjs/common';
import { ArticleRepository } from './article.repository';
import { IsArticle } from "./model/article.interface";
import { CreateArticleDto } from "./dto/create-article.dto";

@Injectable()
export class ArticleService {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async findAll(): Promise<IsArticle[]> {
    return this.articleRepository.findAll();
  }

  async findOne(id: string): Promise<IsArticle> {
    return this.articleRepository.findOne(id);
  }

  async create(createArticleDto: CreateArticleDto): Promise<IsArticle> {
    return this.articleRepository.create(createArticleDto);
  }
}
