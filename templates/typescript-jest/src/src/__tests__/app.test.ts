import { expectTypeOf } from 'expect-type'
import { greeting } from '../index'

test("greeting input type should be correct", () => {
  expectTypeOf(greeting).parameter(0).toEqualTypeOf<string>()
})
