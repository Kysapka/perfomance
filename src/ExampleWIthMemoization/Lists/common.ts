export const TEXT = {
  p1: 'В этом месте у нас по разному прокинуты пропсы, каждый компонент завернут в memo.\n' +
    '  По нажатию на любую кнопку, дергаем ререндер родителя из ребенка.',
  p2: '(1) Сделано все верно, со спредом пропсов, и передачей некотрых пропсов вне компонента',
  p3: '(2) Сравнивались варианты передачи пропсов - через спред оператор и разбирая объект передачи - как видим,\n' +
    '  все работает одинакого.',
  p4: '(3) Прокидываем в пропсах объект, который инициализирован в родителе. Каждый раз новая ссылка, новый ререндер.\n' +
    '  Почему не происходит ререндер детей в мемо, когда мы изменяем тайтл у родителя, хотя у нас все лежит в одном\n' +
    '  стейте и мы далем иммутабельную копию всего стейта? Ответ там ====>>',
  answer: 'Когда мы далем копию ...prev, в этот prev попадают то же самые ссылки , что и были. Мемо сравнивает их и\n' +
    '  ререндер не требуется.',
  p5: 'Даже если вы не принимаете в компоненте пропсы, но передаете их с родителя и они каждый раз новые, ребенок будет ререндерится.'

};
