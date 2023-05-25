type ReplaceAll<S extends string, From extends string, To extends string, Done extends string = ""> = 
  S extends `${Done}${infer start}${From}${infer finish}` 
    ? From extends "" 
      ? S
      : ReplaceAll<`${Done}${start}${To}${finish}`, From, To, `${Done}${start}${To}`>
    : S
