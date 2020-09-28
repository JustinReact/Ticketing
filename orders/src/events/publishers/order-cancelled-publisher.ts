import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@justintickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
