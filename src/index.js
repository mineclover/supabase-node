var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import typia from 'typia';
import { supabase } from './supabaseClient';
const gen = generator => {
    const $generator = typia.createRandom.generator;
    const $ro0 = (_recursive = false, _depth = 0) => { var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k; return ({
        id: (_d = (_c = (_b = ((_a = generator === null || generator === void 0 ? void 0 : generator.customs) !== null && _a !== void 0 ? _a : $generator.customs)) === null || _b === void 0 ? void 0 : _b.string) === null || _c === void 0 ? void 0 : _c.call(_b, [
            {
                name: "pattern",
                value: "[\uAC00-\uD7A3]{3}"
            }
        ])) !== null && _d !== void 0 ? _d : ((_e = generator === null || generator === void 0 ? void 0 : generator.pattern) !== null && _e !== void 0 ? _e : $generator.pattern)(/[가-힣]{3}/),
        description: (_j = (_h = (_g = ((_f = generator === null || generator === void 0 ? void 0 : generator.customs) !== null && _f !== void 0 ? _f : $generator.customs)) === null || _g === void 0 ? void 0 : _g.string) === null || _h === void 0 ? void 0 : _h.call(_g, [
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
        ])) !== null && _j !== void 0 ? _j : ((_k = generator === null || generator === void 0 ? void 0 : generator.pattern) !== null && _k !== void 0 ? _k : $generator.pattern)(/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/)
    }); };
    return $ro0();
};
const hundred = [];
for (let i = 0; i < 100; i++) {
    hundred.push(gen());
}
console.log(hundred);
const arrayInsert = (array) => __awaiter(void 0, void 0, void 0, function* () {
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
    const { data, error } = yield supabase.from('search').insert(array);
    console.log(data, error);
});
