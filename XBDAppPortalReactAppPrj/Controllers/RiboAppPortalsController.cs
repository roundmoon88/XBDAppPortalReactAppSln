using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XBDAppPortalReactApp.BLL;
using XBDAppPortalReactApp.DTO;

namespace XBDAppPortalReactAppPrj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RiboAppPortalsController : ControllerBase
    {
        private XBDAppPortalList xBDAppPortalListBLL;

        public RiboAppPortalsController() 
        {
            xBDAppPortalListBLL = new XBDAppPortalList();
        }


        //https://localhost:44307/api/RiboAppPortals/1/0
        //[HttpGet]
        [HttpGet("{appId}/{appTypeId}")]
        public IEnumerable<XDbAppDTO> Get(int appId, int appTypeId)
        {
            IList<XDbAppDTO> ret = new List<XDbAppDTO>();
            //var appId99 = appId;
            if (appId == 0 && appTypeId == 0)
            {
                return GetXBDAppList();
            }
            else
            {
                IList<FilterDTO> filters = new List<FilterDTO>();
                //get selected AppId
                FilterDTO filter = new FilterDTO
                {
                    Selected = true,
                    ItemId = appId,
                    FilterName = FilterEnum.App
                };
                filters.Add(filter);
                //get selected AppTypeId
                filter = new FilterDTO
                {
                    Selected = true,
                    ItemId = appTypeId,
                    FilterName = FilterEnum.AppType
                };
                filters.Add(filter);
                return GetXBDAppList(filters);
            }

            //return ret;
        }

        private IEnumerable<XDbAppDTO> GetXBDAppList()
        {
            var ret = xBDAppPortalListBLL.GetXBDAppList();
            return ret;
        }
        private IEnumerable<XDbAppDTO> GetXBDAppList(IList<FilterDTO> filters)
        {
            var ret = xBDAppPortalListBLL.GetXBDAppListByFilter(filters);
            return ret;
        }

    }
}
