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
    //https://localhost:44307/api/FilterList/1
    //https://localhost:44307/api/FilterList/2
    [Route("api/[controller]")]
    [ApiController]
    public class FilterListController : ControllerBase
    {
        private XBDAppPortalList xBDAppPortalListBLL = new XBDAppPortalList();

        [HttpGet("{filterInd}")]
        public IEnumerable<FilterDTO> Get(int filterInd)
        {
            if (filterInd == 1)
            {
                //App filters get
                var ret = xBDAppPortalListBLL.FilterGet(FilterEnum.App);
                return ret;
            }
            else
            {
                //App Type filters get

                var ret = xBDAppPortalListBLL.FilterGet(FilterEnum.AppType);
                return ret;
            }

        }
    }
}
