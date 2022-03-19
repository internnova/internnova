import { useQuery } from "blitz"
import getIntern from "../../interns/queries/getIntern"
import { useCurrentUser } from "./useCurrentUser"

export const useIntern = () => {
  const user = useCurrentUser()
  const [intern] = useQuery(getIntern, { where: { id: user?.id } })
  return intern
}
