import { Resolver, Query, Mutation, Arg } from "type-graphql";

@Resolver()
export default class WilderResolver {
    @Query(() => any)//retournera un tableau de wilder
    async read(): Promise<any> { 
        return [];
    }

    @Query(() => any) //retorunera un Wilder
    async readOne(@Arg("id") id: String): Promise<any> {
        return null;
    }

    @Mutation(() => any ) //retournera un wilder
    async create(@Arg("createInput") createInput: any): Promise<any> {
        return null;
    }

    @Mutation(() => any ) //retournera {success: true, message: ""}
    async update(@Arg("updateWilderInput") updateWilderInput: any): Promise<any> {
        //! id pour l'update et les infos pratiques
        return {}
    }

    @Mutation(() => any ) //retournera {success: true, message: ""}
    async delete(@Arg("id") id: String): Promise<any> {
        return {}
    }

    @Mutation(() => any ) //retournera {success: true, message: ""}
    async addSkill(@Arg("addSkillInput") addSkillInput: any): Promise<any> {
        //devra contenir wilderId et skillId
        return {};
    }

    @Mutation(() => any ) //retournera {success: true, message: ""}
    async removekill(@Arg("removeSkillInput") removeSkillInput: any): Promise<any> {
        //devra contenir wilderId et skillId
        return {};
    }

    @Mutation(() => any ) //retournera {success: true, message: ""}
    async updateGrade(@Arg("updateGradeInput") updateGradeInput: any): Promise<any> {
        //devra contenir wilderId et skillId
        return {};
    }
}