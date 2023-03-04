
type Mods = Record<string, boolean | string>
// Record - специальный класс, где ключом является первый тип,
// а значением второй тип

export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}

//Object.entries - получение либо ключа, либо значения,
//возвращает массив
// classNames('remove-btn', {hovered: false, selectable: true}, ['red'])
