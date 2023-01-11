import { Resolver, Query, Mutation, Arg } from "type-graphql";

@Resolver()
export default class SkillResolver {
    @Query(() => any)//retournera un tableau de skill
    async read(): Promise<any> { 
        return [];
    }

    @Mutation(() => any ) //retournera un skill
    async create(@Arg("createSkillInput") createSkillInput: any): Promise<any> {
        //contient le name
        return null;
    }

    @Mutation(() => any ) 
    async update(@Arg("updateSkillInput") updateSkillInput: any): Promise<any> {
        //!devra intégrer l'id et les infos pratiques
        return {}
    }

    @Mutation(() => any ) //retournera {success: true, message: ""}
    async delete(@Arg("id") id: String): Promise<any> {
        return {}
    }
}