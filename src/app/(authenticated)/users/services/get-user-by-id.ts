export async function getUsersById(userId: string) {
  const response = await fetch(`https://reqres.in/api/users/${userId}`);
  const user = await response.json();

  // const responseContent = await fetch(
  //   `https://api-5aqv6.strapidemo.com/api/articles/13/`,
  //   {
  //     next: { revalidate: 10 }
  //   }
  // );
  // const bodyContent = await responseContent.json();
  // const body = bodyContent.data.attributes.ckeditor_content;
  const body = 'lorem  Ypson';

  return { ...user?.data, body };
}
