import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Contact } from './contacts.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactsService {
    
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>
    ){}

    async findAll(): Promise<Contact[]>
    {
        return await this.contactRepository.find();
    }

    async create(contact: Contact): Promise<Contact> {
        return await this.contactRepository.save(contact);
    }

    async update(contact: Contact): Promise<UpdateResult> {
        return await this.contactRepository.update(contact.id, contact);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }
}
