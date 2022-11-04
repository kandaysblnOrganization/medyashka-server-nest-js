import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CreateRoleDto} from "./dto/create-role.dto";
import {Role} from "./role.entity";

@Injectable()
export class RolesService {
    constructor(
        @InjectModel(Role)
        private roleRepository: typeof Role
    ) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepository.create(dto);
        return role;
    }

    async getRoleByValue(value: string) {
        const role = this.roleRepository.findOne({where: {value}})
        return role;
    }

    async getAllRoles() {
        const roles = this.roleRepository.findAll();
        return roles;
    }
}
