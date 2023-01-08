export class Unauthorized extends Error {
  message = "Unauthorized"
}

export class NotFound extends Error {
  message = "Remote resource not found"
}

export class Other extends Error {
  message = "Unknown API rejection"
}
