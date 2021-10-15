import {
  DispatcherChange as DispatcherChangeEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  PhaseChange as PhaseChangeEvent,
  Purchase as PurchaseEvent,
  Unpaused as UnpausedEvent
} from "../generated/SpacelensToken/SpacelensToken"
import {
  DispatcherChange,
  OwnershipTransferred,
  Paused,
  PhaseChange,
  Purchase,
  Unpaused
} from "../generated/schema"

export function handleDispatcherChange(event: DispatcherChangeEvent): void {
  let entity = new DispatcherChange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._dispatcher = event.params._dispatcher
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}

export function handlePhaseChange(event: PhaseChangeEvent): void {
  let entity = new PhaseChange(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.index = event.params.index
  entity._discount = event.params._discount
  entity._endAt = event.params._endAt
  entity._supply = event.params._supply
  entity._over = event.params._over
  entity.save()
}

export function handlePurchase(event: PurchaseEvent): void {
  let entity = new Purchase(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._account = event.params._account
  entity._amount = event.params._amount
  entity._price = event.params._price
  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}
