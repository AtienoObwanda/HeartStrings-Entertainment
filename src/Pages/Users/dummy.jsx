<div className="flex-1 h-[1024px] md:px-5 relative w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between mb-[-1px] mx-auto p-7 sm:px-5 w-full z-[1]">
            <div className="flex flex-col items-center justify-center ml-5 self-stretch w-auto">
              <Text
                className="text-left text-white_A700 w-auto"
                as="h2"
                variant="h2"
              >
                My Tickets
              </Text>
            </div>
            <div className="flex flex-row gap-[21px] items-center justify-start mr-5 self-stretch w-auto">
              <Img src="images/img_share.svg" className="h-6 w-6" alt="share" />
              <div className="flex flex-col items-start justify-center self-stretch w-auto">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  variant="body4"
                >
                  Hi, Gloria
                </Text>
              </div>
            </div>
          </div>
          <div className="overflow-auto mt-auto mx-auto w-full">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass=""
            />
          </div>
        </div>