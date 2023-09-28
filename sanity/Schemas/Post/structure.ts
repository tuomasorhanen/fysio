export const postStructure = (S: any) =>
  S.listItem()
    .title('post')
    .child(
      S.list()
        .title('Post Documents')
        .items([S.listItem().title('Posts').child(S.documentList().title('Posts').filter('_type == "post"'))])
    );
