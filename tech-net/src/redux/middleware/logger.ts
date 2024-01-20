/* eslint-disable @typescript-eslint/no-unused-vars */
import { Middleware } from "@reduxjs/toolkit"

const logger: Middleware = (store)=> (next)=> (action)=> {
  console.log(store.getState())

  next(action)

}

export default logger;