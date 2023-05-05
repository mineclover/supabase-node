import typia from 'typia'
import { supabase } from './supabaseClient'

interface Insert {
  /**
   * @pattern [가-힣]{3}
   */
  id: string
  /**
   * @minLength 10
   * @maxLength 100
   * @pattern ^[ㄱ-ㅎㅏ-ㅣ가-힣]*$
   */
  description: string
}

interface InsertId extends Insert {
  user_id: string
}

const gen = typia.createRandom<Insert>()

const hundred: Insert[] = []
for (let i = 0; i < 100; i++) {
  hundred.push(gen())
}

console.log(hundred)

const arrayInsert = async (array: Insert[]) => {
  const user = {
    user: {
      id: 'test',
    },
  }
  array.forEach((item) => {
    Object.assign(item, {
      user_id: user.user.id,
    })
  })

  const { data, error } = await supabase.from('search').insert(array as InsertId[])
  console.log(data, error)
}
