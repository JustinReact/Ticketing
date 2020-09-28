import { Publisher, Subjects, TicketUpdatedEvent } from "@justintickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
