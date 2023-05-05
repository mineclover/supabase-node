import typia from 'typia';
import { supabase } from "../supabaseClient";
interface Insert {
    /**
     * @pattern [가-힣]{3}
     */
    id: string;
    /**
     * @minLength 10
     * @maxLength 100
     * @pattern ^[ㄱ-ㅎㅏ-ㅣ가-힣]*$
     */
    description: string;
}
interface InsertId extends Insert {
    user_id: string;
}
const gen = (generator?: Partial<typia.IRandomGenerator>): typia.Primitive<Insert> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "pattern",
                value: "[\uAC00-\uD7A3]{3}"
            }
        ]) ?? (generator?.pattern ?? $generator.pattern)(/[가-힣]{3}/),
        description: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "minLength",
                value: "10"
            },
            {
                name: "maxLength",
                value: "100"
            },
            {
                name: "pattern",
                value: "^[\u3131-\u314E\u314F-\u3163\uAC00-\uD7A3]*$"
            }
        ]) ?? (generator?.pattern ?? $generator.pattern)(/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/)
    });
    return $ro0();
};
const hundred: Insert[] = [];
for (let i = 0; i < 100; i++) {
    hundred.push(gen());
}
console.log(hundred);
const arrayInsert = async (array: Insert[]) => {
    const user = {
        user: {
            id: 'test',
        },
    };
    array.forEach((item) => {
        Object.assign(item, {
            user_id: user.user.id,
        });
    });
    const { data, error } = await supabase.from('search').insert(array as InsertId[]);
    console.log(data, error);
};
