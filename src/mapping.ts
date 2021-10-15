import {
  Purchase as PurchaseEvent
} from "../generated/SpacelensToken/SpacelensToken"

import {
  Holder
} from "../generated/schema"

export function handlePurchase(event: PurchaseEvent): void {
  let entity = new Holder(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params._account
  entity.amount = event.params._amount
  entity.save()
}

