import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@justintickets/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
