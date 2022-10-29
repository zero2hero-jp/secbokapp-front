export const get = async (path: string): Promise<any> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}${path}`)
    .then(res => {
      if(!res.ok) {
        const errorStatus = res.status
        const errorText = res.statusText
        throw new Error(`[code: ${errorStatus}] ${errorText}`)
      } else {
        return res.json()
      }

    }).then(json => {
      // 呼び出し元にjsonの中身をリターン
      return json.data

    // エラーはここで共通化。握り呼び出し元には返しません。
    }).catch(error => {
// AT_SEE: https://github.com/zero2hero-jp/secbokapp-front/issues/44
      alert(error)
    })
}
