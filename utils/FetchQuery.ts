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

    // エラーは全てここで握り呼び出し元には返しません。
    }).catch(error => {
      // TODO: 共通のエラー処理実装。
      alert(error)
    })
}
