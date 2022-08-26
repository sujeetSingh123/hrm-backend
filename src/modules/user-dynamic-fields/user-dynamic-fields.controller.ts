import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { UserDynamicFieldsService } from './user-dynamic-fields.service';
import { CreateUserDynamicFieldDto } from './dto/create-user-dynamic-field.dto';
import { UpdateUserDynamicFieldDto } from './dto/update-user-dynamic-field.dto';

@Controller('user-dynamic-fields')
export class UserDynamicFieldsController {
    constructor(
        private readonly userDynamicFieldsService: UserDynamicFieldsService
    ) {}

    @Post()
    create(@Body() createUserDynamicFieldDto: CreateUserDynamicFieldDto) {
        return this.userDynamicFieldsService.create(createUserDynamicFieldDto);
    }

    @Get()
    findAll() {
        return this.userDynamicFieldsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userDynamicFieldsService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateUserDynamicFieldDto: UpdateUserDynamicFieldDto
    ) {
        return this.userDynamicFieldsService.update(
            +id,
            updateUserDynamicFieldDto
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userDynamicFieldsService.remove(+id);
    }
}
