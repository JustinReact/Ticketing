import { Publisher, OrderCreatedEvent, Subjects } from "@justintickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
