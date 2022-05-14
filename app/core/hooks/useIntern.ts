import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import getIntern from "app/interns/queries/getIntern"
import { useQuery } from "blitz"

export const useIntern = () => {
  const user = useCurrentUser()
  const [intern] = useQuery(getIntern, { where: { id: user?.id } })
  return intern
}
