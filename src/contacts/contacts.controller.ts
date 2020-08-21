import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './contacts.entity';

@Controller('contacts')
export class ContactsController {

    constructor(private contactService: ContactsService){}

    @Get()
    async index(): Promise<Contact[]> {
        return await this.contactService.findAll();
    }

    @Post()
    async create(@Body() contactData: Contact): Promise<Contact> {
        return await this.contactService.create(contactData);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        return await this.contactService.update(contactData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<any> {
        return await this.contactService.delete(Number(id));
    }

}
